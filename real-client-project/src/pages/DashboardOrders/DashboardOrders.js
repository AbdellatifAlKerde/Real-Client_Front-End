//
import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import axios from "axios";
import TextField from "../../components/text-field/text-field";
import MainButton from "../../components/button/button";
import Swal from "sweetalert2";
import DashboardHeroSection from "../../components/DashboardHeroSection/DashboardHeroSection";
import DashboardPopUp from "../../components/DashboardPopUp/DashboardPopUp";

function DashboardOrders() {
  const [data, setData] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  const [page, setPage] = useState(0);
  const [perPage, setPerPage] = useState(25);
  const [isLoading, setIsLoading] = useState(false);

  const getRowId = (row) => {
    return row._id;
  };

  const columns = [
    { field: "_id", headerName: "ID", width: 220 },
    {
      field: "user.fullName",
      headerName: "Full Name",
      width: 260,
      valueGetter: (params) => {
        return params.row.user[0].fullName;
      },
    },
    {
      field: "user.email",
      headerName: "Email",
      width: 260,
      valueGetter: (params) => {
        return params.row.user[0].email;
      },
    },
    {
      field: "user.phoneNumber",
      headerName: "Phone Number",
      width: 260,
      valueGetter: (params) => {
        return params.row.user[0].phoneNumber;
      },
    },
    {
      field: "user.address",
      headerName: "Address",
      width: 260,
      valueGetter: (params) => {
        return params.row.user[0].address;
      },
    },
    {
      field: "products",
      headerName: "Products",
      width: 200,
      valueGetter: (params) => {
        return params.row.products.map((product) => product.name).join(", ");
      },
    },
    {
      field: "actions",
      headerName: "Actions",
      width: 200,
      sortable: false,
      renderCell: (params) => (
        <>
          <IconButton
            color="secondary"
            aria-label="delete"
            onClick={() => deleteOrder(params.id)}
          >
            <DeleteIcon style={{ color: "var(--accent-color)" }} />
          </IconButton>
          {/* <IconButton
            color="primary"
            aria-label="edit"
            onClick={() => {
              triggerEdit();
              setOpenPopup(true);
              setEditId(params.id);
            }}
          >
            <EditIcon style={{ color: "var(--accent-color)" }} />
          </IconButton> */}
        </>
      ),
    },
  ];

  const getOrders = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/order`
      );
      console.log(response);
      setData(response.data.items);
      setIsLoading(false);
    } catch (e) {
      console.log(e);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getOrders();
  }, []);

  const deleteOrder = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "var(--secondary-color)",
      cancelButtonColor: "var(--accent-color)",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await axios
            .delete(`${process.env.REACT_APP_API_URL}/api/order/${id}`)
            .then((response) => {
              console.log(response.data);
              getOrders();
            });
        } catch (error) {
          console.log(error);
        }
        Swal.fire("Deleted!", "Order has been deleted.", "success");
      }
    });
  };

  return (
    <div className="dashboard-admins onLoad">
      <DashboardHeroSection title="Orders" />
      <div
        className="dashboard-admin-data-grid"
        style={{ width: "100%", overflow: "hidden" }}
      >
        <DataGrid
          sx={{ width: "100%" }}
          rows={data}
          columns={columns}
          getRowId={getRowId}
          // pagination
          // pageSize={perPage}
          // rowCount={totalItems}
          // onPageChange={handlePageChange}
          // onPageSizeChange={handlePageSizeChange}
          rowSelection={false}
          loading={isLoading}
        />
      </div>
    </div>
  );
}

export default DashboardOrders;
