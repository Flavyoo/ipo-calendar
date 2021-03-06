import React from 'react'
import PropTypes from 'prop-types'
import { Grid } from '@material-ui/core'
import MomentUtils from '@date-io/moment'
import { DEFAULT_DATE_FORMAT } from '../constants/util_constants'
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers'

export default function DateRangePicker({
  startDate,
  endDate,
  handleStartDateChange,
  handleEndDateChange,
}) {
  return (
    <MuiPickersUtilsProvider utils={MomentUtils}>
      <Grid container justify="center" spacing={3}>
        <Grid item xs={12} sm={4}>
          <KeyboardDatePicker
            autoOk
            fullWidth
            format={DEFAULT_DATE_FORMAT}
            variant="inline"
            margin="normal"
            id="date-picker-inline-from"
            label="Start date"
            value={startDate}
            onChange={handleStartDateChange}
            KeyboardButtonProps={{
              'aria-label': 'Select the start date',
            }}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <KeyboardDatePicker
            autoOk
            fullWidth
            format={DEFAULT_DATE_FORMAT}
            variant="inline"
            margin="normal"
            id="date-picker-inline-to"
            label="End date"
            value={endDate}
            onChange={handleEndDateChange}
            KeyboardButtonProps={{
              'aria-label': 'Select the end date',
            }}
          />
        </Grid>
      </Grid>
    </MuiPickersUtilsProvider>
  )
}

DateRangePicker.propTypes = {
  /**
   * Start date of the date range
   */
  startDate: PropTypes.object.isRequired,

  /**
   * End date of the date range
   */
  endDate: PropTypes.object.isRequired,

  /**
   * A function to update the start date
   */
  handleStartDateChange: PropTypes.func.isRequired,

  /**
   * A function to update the end date
   */
  handleEndDateChange: PropTypes.func.isRequired,
}
