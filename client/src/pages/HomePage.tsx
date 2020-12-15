import Main from "../components/Main-view/Main-view";
import Search from '../components/search/Search';
import Categories from "../components/Categories-container/Categories-container";
 
const HomePage = () => {
    return ( 
        <div>
            <Main />
            <Search />
            <Categories />
        </div>
     );
}
 
export default HomePage;