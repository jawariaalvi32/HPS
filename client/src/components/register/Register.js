import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  TextField,
  InputLabel,
  Grid,
  DatePicker,
  CssBaseline,
  RadioGroup,
  FormLabel,
  MenuItem,
  Select,
  FormGroup,
  FormControl,
  FormControlLabel,
  InputText
} from '@material-ui/core';
import DateFnsUtils from '@date-io/date-fns';
import { KeyboardDatePicker, MuiPickersUtilsProvider  } from '@material-ui/pickers';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function Register() {
  const classes = useStyles();
  const [Header, setHeader] = useState({
    MRNo: "",
    TokenNo: "",
    RegistrationDate: new Date(),
    Name: "",
    FatherOrHusband: "",
    DOB: new Date(),
    Age: "",
    Gender: "",
    Religion: "",
    District: "",
    City: "",
    Area: "",
    HousNo: "",
    Address: "",
    CNIC: "",
    Phone: "",
    OffPhone: "",
    Mobile: "",
    RefBy: "",
    Remarks: "",
    IsRejected: false,
    IsZakat: false,
    IsPAFEmp: false,
    MonthlyConsLimit: 0,
    ThumbImage: "",
    NOY: "",
    EmpID: "",
    IsStaff: false,
    CreateUser: "",
    ModifyUser: "",
    CreateDate: "",
    ModifyDate: ""
});

  return (
    <div style={{ padding: 16, margin: 'auto', maxWidth: '100%' }}>
      <Grid container>
        <Grid md={4} sm={12}>
          <TextField value={Header.MRNo} id="MRNo"
            type="text" disabled={true}
            label="M.R. #"/>
        </Grid>
        <Grid md={4} sm={12}>
          <TextField value={Header.TokenNo} id="TokenNo" type="text" 
            onChange={(e) => setHeader({ ...Header, TokenNo: e.target.value })}
            label="TokenNo"/>
        </Grid>
        <Grid md={4} sm={12}>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker disableToolbar variant="inline" format="MM/dd/yyyy"
              margin="normal" id="RegistrationDate" label="Registration Date"
              value={Header.RegistrationDate}
              onChange={(date) => setHeader({ ...Header, RegistrationDate: date })}
            />
          </MuiPickersUtilsProvider>
        </Grid>
        <Grid md={4} sm={12}>
          <TextField value={Header.Name} id="Name" type="text" 
            onChange={(e) => setHeader({ ...Header, Name: e.target.value })}
            label="Name"/>
        </Grid>
        <Grid md={4} sm={12}>
          <TextField value={Header.FatherOrHusband} id="FatherOrHusband" type="text" 
            onChange={(e) => setHeader({ ...Header, FatherOrHusband: e.target.value })}
            label="Father Name"/>
        </Grid>
        <Grid md={4} sm={12}>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker disableToolbar variant="inline" format="MM/dd/yyyy"
              margin="normal" id="DOB" label="Date of Birth"
              value={Header.DOB}
              onChange={(date) => setHeader({ ...Header, DOB: date })}
            />
          </MuiPickersUtilsProvider>
        </Grid>
        <Grid md={4} sm={12}>
          <TextField value={Header.Age} id="Age" type="number" 
            onChange={(e) => setHeader({ ...Header, Age: e.target.value })}
            label="Age"/>
        </Grid>
        <Grid md={4} sm={12} lg={3}>
          <FormControl>
            <InputLabel id="demo-simple-select-helper-label">Gender</InputLabel>
            <Select
              labelId="demo-simple-select-helper-label"
              id="Gender"
              value={Header.Gender}
              onChange={(e) => setHeader({ ...Header, Gender: e.target.value })}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value="male">Male</MenuItem>
              <MenuItem value="female">Female</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid md={4} sm={12} lg={3}>
          <FormControl>
            <InputLabel id="demo-simple-select-helper-label">Religion</InputLabel>
            <Select
              labelId="demo-simple-select-helper-label"
              id="Religion"
              value={Header.Religion}
              onChange={(e) => setHeader({ ...Header, Religion: e.target.value })}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value="islam">Islam</MenuItem>
              <MenuItem value="christian">Christian</MenuItem>
              <MenuItem value="other">Other</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid md={4} sm={12}>
          <FormControl className={classes.formControl}>
            <InputLabel id="demo-simple-select-helper-label">IsZakat</InputLabel>
            <Select
              labelId="demo-simple-select-helper-label"
              id="IsZakat"
              value={Header.IsZakat}
              onChange={(e) => setHeader({ ...Header, IsZakat: e.target.value })}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={true}>Yes</MenuItem>
              <MenuItem value={false}>No</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid md={4} sm={12}>
          <TextField value={Header.CNIC} id="CNIC" type="number" 
            onChange={(e) => setHeader({ ...Header, CNIC: e.target.value })}
            label="CNIC"/>
        </Grid>
      </Grid>

      <Grid container>
          <Grid sm={12}>
              {/* <Fieldset legend="Contact" style={{ padding: 10 }}> */}
                  <Grid container>
                    <Grid md={4} sm={12}>
                      <TextField value={Header.HousNo} id="HousNo" type="text"
                        Change={(e) => setHeader({ ...Header, HousNo: e.target.value })}
                        label="HousNo"/>
                    </Grid>
                    <Grid md={4} sm={12}>
                      <TextField value={Header.Address} id="Address" type="text"
                        Change={(e) => setHeader({ ...Header, Address: e.target.value })}
                        label="Address"/>
                    </Grid>
                    <Grid md={4} sm={12}>
                      <TextField value={Header.Area} id="Area" type="text"
                        Change={(e) => setHeader({ ...Header, Area: e.target.value })}
                        label="Area"/>
                    </Grid>
                    <Grid md={4} sm={12}>
                      <TextField value={Header.District} id="District" type="text"
                        Change={(e) => setHeader({ ...Header, District: e.target.value })}
                        label="District"/>
                    </Grid>
                    <Grid md={4} sm={12}>
                      <TextField value={Header.City} id="City" type="text"
                        Change={(e) => setHeader({ ...Header, City: e.target.value })}
                        label="City"/>
                    </Grid>
                    <Grid md={4} sm={12}>
                      <TextField value={Header.Phone} id="Phone" type="number"
                        Change={(e) => setHeader({ ...Header, Phone: e.target.value })}
                        label="Phone"/>
                    </Grid>
                    <Grid md={4} sm={12}>
                      <TextField value={Header.OffPhone} id="OffPhone" type="number"
                        Change={(e) => setHeader({ ...Header, OffPhone: e.target.value })}
                        label="Office Phone"/>
                    </Grid>
                    <Grid md={4} sm={12}>
                      <TextField value={Header.Mobile} id="Mobile" type="number"
                        Change={(e) => setHeader({ ...Header, Mobile: e.target.value })}
                        label="Mobile"/>
                    </Grid>
                    <Grid md={4} sm={12}>
                      <TextField value={Header.MonthlyConsLimit} id="MonthlyConsLimit" type="number"
                        Change={(e) => setHeader({ ...Header, MonthlyConsLimit: e.target.value })}
                        label="Monthly Consumtion Limit"/>
                    </Grid>  
                  </Grid>
              {/* </Fieldset> */}
          </Grid>
      </Grid>
      <br />
      
      <Grid container>
          <Grid sm={12}>
              {/* <Fieldset legend="Reffer Info" style={{ padding: 10 }}> */}
                  <Grid container>
                      <Grid md={4} sm={12}>
                        <TextField value={Header.RefBy} id="RefBy" type="text"
                          Change={(e) => setHeader({ ...Header, RefBy: e.target.value })}
                          label="Refered By"/>
                      </Grid>
                      <Grid md={4} sm={12}>
                        <TextField value={Header.EmpID} id="EmpID" type="text"
                          Change={(e) => setHeader({ ...Header, EmpID: e.target.value })}
                          label="Employee ID"/>
                      </Grid>
                      <Grid md={4} sm={12}>
                        <TextField value={Header.NOY} id="NOY" type="text"
                          Change={(e) => setHeader({ ...Header, NOY: e.target.value })}
                          label="NOY"/>
                      </Grid>
                      <Grid md={4} sm={12}>
                        <TextField value={Header.Remarks} id="Remarks" type="text"
                          Change={(e) => setHeader({ ...Header, Remarks: e.target.value })}
                          label="Remarks"/>
                      </Grid>
                  </Grid>
              {/* </Fieldset> */}
          </Grid>
      </Grid>

      <Grid container>
          <Grid className="p-col-12">
              {/* <Fieldset legend="Staff" style={{ padding: 10 }}> */}
                  <Grid container>
                    <Grid md={4} sm={12}>
                      <TextField value={Header.RefBy} id="RefBy" type="text"
                        Change={(e) => setHeader({ ...Header, RefBy: e.target.value })}
                        label="Refered By"/>
                    </Grid>
                      {/* <Grid md={4} sm={12}>
                          <div style={{ marginTop: 4 }}>
                              <CheckboxButton label={"Is PAF Employee"} disabled={property.viewList} checked={Header.IsPAFEmp} style={{ fontSize: '20px' }}
                                  Change={e => setHeader({ ...Header, IsPAFEmp: !Header.IsPAFEmp })} />
                          </div>
                      </div>
                      <div className="p-col-2 p-lg-2 p-md-4 p-sm-12">
                          <div style={{ marginTop: 4 }}>
                              <CheckboxButton label={"Is Staff"} disabled={property.viewList} checked={Header.IsStaff} style={{ fontSize: '20px' }}
                                  Change={e => setHeader({ ...Header, IsStaff: !Header.IsStaff })} />
                          </div>
                      </div>
                      <div className="p-col-2 p-lg-2 p-md-4 p-sm-12">
                          <div style={{ marginTop: 4 }}>
                              <CheckboxButton label={"Is Rejected"} disabled={property.viewList} checked={Header.IsRejected} style={{ fontSize: '20px' }}
                                  Change={e => setHeader({ ...Header, IsRejected: !Header.IsRejected })} />
                          </div>
                      </div> */}
                  </Grid>
              {/* </Fieldset> */}
          </Grid>
      </Grid>
    </div>
  );
}

