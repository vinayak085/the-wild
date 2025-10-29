import Stat from './Stat'
import { formatCurrency } from '../../utils/helpers';
import {HiOutlineBanknotes, HiOutlineBriefcase, HiOutlineCalendarDays, HiOutlineChartBar} from "react-icons/hi2"

function Stats({bookings,confirmedStays,numDays,cabinCount}) {
// 1
 const numBookings = bookings.length;

// 2
 const sales = bookings.reduce((acc,curr)=> acc + curr.totalPrice,0)

// 3
const checkins = confirmedStays.length;
 
// 4
const occupation = confirmedStays.reduce((acc,cur)=> acc+cur.numNights,0 ) / (numDays * cabinCount)

  return (
    <>
    <Stat title="Bookings"
     color="blue" 
     icon={<HiOutlineBriefcase/>} 
     value={numBookings}
     />

     <Stat title="sales"
     color="green" 
     icon={<HiOutlineBanknotes/>} 
     value={formatCurrency(sales)}
     />
    
    <Stat title="check ins"
     color="indigo" 
     icon={<HiOutlineCalendarDays/>} 
     value={checkins}
     />

    <Stat title="Occupancy rate"
     color="yellow" 
     icon={<HiOutlineChartBar/>} 
     value={Math.round(occupation * 100)+"%"}
     />
  </>

  )
}
export default Stats