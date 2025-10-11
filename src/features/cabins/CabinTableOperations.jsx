import TableOperations from '../../ui/TableOperations'
import Filter from '../../ui/Filter'
import SortBy from '../../ui/SortBy'


function CabinTableOperations() {
  return (
    <TableOperations>
      <Filter filteredField="discount" options={[
        {value:'all', label:"All"},
        {value:'no-discount', label:"No discount"},
        {value:'with-discount', label:"With discount"},
      ]}/>  
    <SortBy options={[
      {value:"name-asc", label:"Sort By Name A-Z"},
      {value:"name-desc", label:"Sort By Name Z-A"},
      {value:"regularPrice-asc", label:"Sort By price(low first)"},
      {value:"regularPrice-desc", label:"Sort By price(high first)"},
      {value:"maxCapacity-asc", label:"Sort By Capicity(low first)"},
      {value:"maxCapacity-desc", label:"Sort By Capacity(high first)"},
    ]}/>
         
    </TableOperations>
  )
}

export default CabinTableOperations