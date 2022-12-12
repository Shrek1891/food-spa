import {useState} from "react";
import {useNavigate} from "react-router-dom";

const Search = ({cb = Function.prototype}) => {
    const [value, setValue] = useState('');
    const navigator = useNavigate();
    const handleKey = (e) => {
        if (e.key === 'Enter') {
            handleSubmit();
        }
    }

    const handleSubmit = () => {
        cb(value);

    };
    return (
        <div className="row">
            <div className="input-field col s12">
                <input
                    type='search'
                    id=' search-field'
                    onKeyDown={handleKey}
                    onChange={(e) => setValue((e.target.value))}
                    value={value}
                />
                <button
                    className='btn'
                    style={{
                        position: 'absolute',
                        top: 0,
                        right: 0,
                    }}
                    onClick={handleSubmit}
                >
                    Search
                </button>
            </div>
        </div>
    )
}

export {Search};