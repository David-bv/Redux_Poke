import { Input } from 'antd';
const { Search } = Input;

const Searcher = () => {
    return <Search 
           className='searchInput'
           placeholder="Buscar..." 
           //onSearch={onSearch} 
           enterButton /
        >
};



export default Searcher;