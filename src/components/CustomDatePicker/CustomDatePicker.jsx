import * as React from 'react';
import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';




 const CustomDatePicker=({label,value,onChange,isFullWidth,isRequired})=> {

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
         format='DD/MM/YYYY'
         defaultValue={dayjs()}
          label={label}
          value={value}
          onChange={onChange}

          slotProps={{ textField: { size: 'small' ,variant:"outlined",fullWidth:isFullWidth,required:isRequired,
        inputProps:{
          style:{
            fontSize: '10px',height:16,alignItems:"center", fontWeight:"900"
          }
        },
        InputLabelProps:{
          sx:{fontSize: "12px",  fontWeight:"900",top: "-0.2vh",padding:0,"&.MuiInputLabel-shrink": { top: 0 ,transform:"translate(12px,-8px) scale(1.08)"}
        }}
        }, 
      openPickerButton:{style:{color:"#ff5722",padding:0,paddingRight:0.7}}
      }}
        />
    </LocalizationProvider>
  );
}

export default CustomDatePicker;