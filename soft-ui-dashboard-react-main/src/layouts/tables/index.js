// @mui material components
import Card from "@mui/material/Card";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

// Soft UI Dashboard React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Table from "examples/AccordianTable/index";

import { fetchSportOdds, fetchSportsBet } from "./data/getGameData";

// Data
import authorsTableData from "./data/authorsTableData";
import { useEffect, useState } from "react";

function Tables() {
  const [data, setData] = useState(null); // Initialize data as null to indicate loading state
  const [tableData, setTableData] = useState(null); // Initialize tableData as null

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetchSportsBet();
        const odds = await fetchSportOdds(1);
        console.log(odds);
        setData(res);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  useEffect(() => {
    if (data !== null) {
      console.log(data)
      const { columns, rows } = authorsTableData(data);
      setTableData({ columns, rows });
    }
  }, [data]);

  if (data === null) {
    return (
      <DashboardLayout>
        <DashboardNavbar />
        <SoftBox py={3}>
          <SoftTypography>Loading...</SoftTypography>
        </SoftBox>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SoftBox py={3}>
        <SoftBox mb={3}>
          <Card>
            <SoftBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
              <SoftTypography variant="h6">Possible Bets</SoftTypography>
            </SoftBox>
            <SoftBox
              sx={{
                "& .MuiTableRow-root:not(:last-child)": {
                  "& td": {
                    borderBottom: ({ borders: { borderWidth, borderColor } }) =>
                      `${borderWidth[1]} solid ${borderColor}`,
                  },
                },
              }}
            >
              {tableData && <Table columns={tableData.columns} rows={tableData.rows} />}
            </SoftBox>
          </Card>
        </SoftBox>
      </SoftBox>
    </DashboardLayout>
  );
}

export default Tables;
