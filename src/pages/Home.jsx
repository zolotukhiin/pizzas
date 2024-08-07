import Categories from '../components/Categories';
import Sort from '../components/Sort';
import PizzaBlock from '../components/PizzaBlock';
import Skeleton from '../components/PizzaBlock/Sceleton';
import { useContext, useEffect, useState } from 'react';
import Pagination from '../components/Pagination';
import { SearchContext } from '../App';

// axios
import axios from 'axios';

// redux
import { useDispatch, useSelector } from 'react-redux';
import { setCategoryId, setSort } from '../redux/slices/filterSlice';
import { setCurrentPage } from '../redux/slices/paginationSlice';

const Home = () => {

    // redux...
    const categoryId = useSelector((state) => state.filterSlice.categoryId);
    const sortType = useSelector((state) => state.filterSlice.sort);
    const currentPage = useSelector((state) => state.paginationSlice.currentPage)
    const dispatch = useDispatch();

    const onChangeCategory = (id) => {
        dispatch(setCategoryId(id));
    };

    const onChangeSort = (obj) => {
        dispatch(setSort(obj));
    };

    const onChangePage = (number) => {
        dispatch(setCurrentPage(number));
    };
    // ...redux

    const { searchValue } = useContext(SearchContext);
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    // выполняется один раз или при изменении данных
    useEffect(() => {
        setIsLoading(true);

        const category = categoryId > 0 ? `category=${categoryId}` : '';
        const sort = sortType.sortProperty.replace('-', '');
        const order = sortType.sortProperty.includes('-') ? 'asc' : 'desc';
        const search = searchValue ? `search=${searchValue}` : '';

        // axios
        axios.get(
            `https://66aff58f6a693a95b5379243.mockapi.io/items?page=${currentPage}&limit=4&sortBy=${sort}&order=${order}&${search}&${category}`
        )
        .then((res) => {
            setItems(res.data);
            setIsLoading(false);
        });

        // scroll вверх
        window.scrollTo(0, 0);
    }, [categoryId, sortType, searchValue, currentPage]);

    const pizzas = items === 'Not found'
        ? 'a'
        : items.map((obj) => (
            <PizzaBlock
                title={obj.title}
                price={obj.price}
                image={obj.imageUrl}
                sizes={obj.sizes}
                types={obj.types}
                key={obj.id}
            />
        ));
    const skeletons = [...new Array(8)].map((_, index) => <Skeleton key={index} />);

    return (
        <div className="container">
            <div className="content__top">
                <Categories value={categoryId} onChangeCategory={onChangeCategory} />
                <Sort value={sortType} onChangeSort={onChangeSort} />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {
                    isLoading
                        ? skeletons
                        : pizzas
                }
            </div>
            <Pagination currentPage={currentPage} onChangePage={onChangePage} />
        </div>
    )
}

export default Home;
