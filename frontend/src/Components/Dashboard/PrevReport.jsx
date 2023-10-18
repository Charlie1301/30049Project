import React, { useState} from 'react';
import { FaSearch } from 'react-icons/fa';
import { Link , useLocation} from 'react-router-dom';
import DataTable from 'react-data-table-component'
import './PrevReport.css'; // Import your CSS file
import {Icon} from "./PrevReportStyles";
import axios from 'axios';

const PrevReport = () => {

  const location = useLocation()

  const path = location.pathname

  const [records, setRecords] = useState();

  axios.get("http://localhost:8081" + path).then(res => setRecords(res.data)).catch(err => console.log(err));

  console.log(records)

  const columns = [
    {
      name: 'Report Name',
      selector: row => (
        <Link to={"/reportanalysis/" + row.userID + "/" + row.reportID}>{row.name}</Link>
      ),
      sortable: true
    },
    {
      name: 'Date Created',
      selector: row => row.date,
      sortable: true
    }
  ];

  function handleFilter(event){

    const newData = records.filter(row => {

      return row.name.toLowerCase().includes(event.target.value.toLowerCase())

    })

    setRecords(newData)

  }

  return (
    <>

    <div className="prev-report-container">

    <i className="fa fa-heart"></i>

      <Icon to="/">FOO</Icon>

      <div className="search-box">

        <button className="btn-search"><FaSearch /></button>

        <input type="text" className="input-search" placeholder="Type to Search..." onChange={handleFilter}/>

      </div>

      <DataTable

        columns={columns}
        data={records}
        selectableRows
        fixedHeader
        pagination
        className="data-table"

      />

    </div>

    </>
  )

}


export default PrevReport