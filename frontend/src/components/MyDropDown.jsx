
import Dropdown from 'react-bootstrap/Dropdown';

function MyDropDown({sortFunction}) {
  return (
    <Dropdown>
      <Dropdown.Toggle>
        Sort
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item onClick={()=>sortFunction("asc")}>Asc</Dropdown.Item>
        <Dropdown.Item onClick={()=>sortFunction("desc")}>Desc</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default MyDropDown;