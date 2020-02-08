import React , {useState} from 'react';
import { Input } from 'semantic-ui-react';
import classNames from 'classnames/bind';
import styles from './SearchField.css';
const cx = classNames.bind(styles);

export const SearchField = (props) => {
    const [value, setInputValue] = useState('');
    const onChange = (event) => {
        setInputValue(event.target.value);
        props.onChange(event);
    }
    const handleClick = () => {
        props.onClick(value);
    }
    return <div className={cx('searchField')}>
        <Input action={{
            icon: 'search',
            onClick: handleClick,
        }} fluid defaultValue={value} placeholder={'Search...'} onChange={onChange}/>
    </div>
    
}

export default SearchField;