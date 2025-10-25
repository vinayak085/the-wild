import styled from "styled-components";
import { useRecentBookings } from "./useRecentBooking";
import Spinner from '../../ui/Spinner'

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
`;


function DashboardLayout() {

  const {isLoading,bookings} = useRecentBookings();

  if(isLoading) return <Spinner/>

  return (
    <StyledDashboardLayout>
      <div>chart sales</div>
      <div>chart sales</div>
      <div>chart sales</div>
      <div>chart sales</div>
    </StyledDashboardLayout>
  )
}

export default DashboardLayout