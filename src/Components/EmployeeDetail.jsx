import Skeleton from '@mui/material/Skeleton'
import Stack from '@mui/material/Stack'
import styled from 'styled-components'
import { Paper } from '@mui/material'
import { useContext } from 'react'
import { EmployeesContext } from '../EmployeesContext'

const StyledPaper = styled(Paper)`
  padding: 1rem;
  margin-right: 0.5rem;
`
const StyledEmployeeDetail = styled(Paper)`
  display: flex;
  gap: 10px;
  padding: 10px 0;
  align-items: center;
  margin-right: 0.5rem;
`
const Image = styled.img`
  width: 85px;
  height: 85px;
  border-radius: 50%;
  margin-left: 1rem;
`
const EmployeeDetail = () => {
  const { isLoading, employeeDetail } = useContext(EmployeesContext)
  if (isLoading) {
    return (
      <Stack spacing={1}>
        <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
        <Skeleton variant="circular" width={80} height={80} />
        <Skeleton variant="rectangular" width={400} height={70} />
        <Skeleton variant="rectangular" width={400} height={70} />
        <Skeleton variant="rectangular" width={400} height={70} />
        <Skeleton variant="rectangular" width={400} height={70} />
      </Stack>
    )
  }
  return (
    <>
      <StyledEmployeeDetail>
        <Image src={employeeDetail.image} alt={employeeDetail.image} />
        <div>
          <h3>{employeeDetail.name}</h3>
          <p>{employeeDetail.occupation}</p>
        </div>
      </StyledEmployeeDetail>
      <StyledPaper variant="outlined">
        <h3>Call Office</h3>
        <p>{employeeDetail.callOffice}</p>
      </StyledPaper>
      <StyledPaper variant="outlined">
        <h3>Call Mobile</h3>
        <p>{employeeDetail.callMobile}</p>
      </StyledPaper>
      <StyledPaper variant="outlined">
        <h3>SMS</h3>
        <p>{employeeDetail.sms}</p>
      </StyledPaper>
      <StyledPaper variant="outlined">
        <h3>Email</h3>
        <p>{employeeDetail.email}</p>
      </StyledPaper>
    </>
  )
}

export default EmployeeDetail
