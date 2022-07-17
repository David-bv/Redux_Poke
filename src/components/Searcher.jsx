import { Input } from 'antd';
const { Search } = Input;

const Searcher = () => {
    return <Search 
           placeholder="Buscar..." 
           //onSearch={onSearch} 
           enterButton /
        >
};



export default Searcher;