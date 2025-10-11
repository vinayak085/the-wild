import styled from "styled-components";
import BookingDataBox from "../../features/bookings/BookingDataBox";

import Row from "../../ui/Row";
import Heading from "../../ui/Heading";
import ButtonGroup from "../../ui/ButtonGroup";
import Button from "../../ui/Button";
import ButtonText from "../../ui/ButtonText";
import CheckBox from "../../ui/Checkbox";
import Spinner from "../../ui/Spinner";

import { useMoveBack } from "../../hooks/useMoveBack";
import { useBooking } from "../bookings/useBooking";
import { useEffect, useState } from "react";
import { formatCurrency } from "../../utils/helpers";
import { useCheckin } from "./useCheckin";
import { useSettings } from "../settings/useSettings";

const Box = styled.div`
  /* Box */
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);
  padding: 2.4rem 4rem;
`;

function CheckinBooking() {

  const [confirmPaid,setConfirmPaid] = useState(false);
  const [addBreakFast,setAddBreakFast] = useState(false);
  const {booking,isLoading} = useBooking();
  const {settings,isLoading:isLoadingSettings}= useSettings();

   useEffect(()=>setConfirmPaid(booking?.isPaid ?? false),[booking])
  
  const moveBack = useMoveBack();
  const {checkin,isCheckingIn} = useCheckin();

  if(isLoading) return <Spinner/>

  const {
    id: bookingId,
    guests,
    totalPrice,
    numGuests,
    hasBreakfast,
    numNights,
  } = booking;

  function handleCheckin() {
    if(!confirmPaid) return;
    checkin(bookingId);
  }

  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">Check in booking #{bookingId}</Heading>
        <ButtonText onClick={moveBack}>&larr; Back</ButtonText>
      </Row>

      <BookingDataBox booking={booking} />

<Box>
  <CheckBox checked={addBreakFast}
   onChange={()=>{setAddBreakFast((add)=>!add)
    setConfirmPaid(false)
    }}
    id="breakfast"
   >
    want to add breakfast for x?
   </CheckBox>
</Box>

<Box>
  <CheckBox
  checked={confirmPaid}
  onChange={()=>setConfirmPaid((confirm)=>!confirm)}
  id='confirm'
  disabled={confirmPaid || isCheckingIn}
  >
    i confirm that {guests.fullName} has paid the total amount of{" "}
    {formatCurrency(totalPrice)}
  </CheckBox>
</Box>

      <ButtonGroup>
        <Button onClick={handleCheckin} disabled={!confirmPaid || isCheckingIn}>Check in booking #{bookingId}</Button>
        <Button variation="secondary" onClick={moveBack}>
          Back
        </Button>
      </ButtonGroup>
    </>
  );
}

export default CheckinBooking;