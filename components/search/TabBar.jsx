/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-unused-vars */

import React from 'react';
import { Tabs, Tab, Box } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchQuery, setTab } from '../../actions';
import { B1 } from '../ui/typography';
import styles from '../../styles/components/TabBar.module.css';

function TabBar(props) {
  // const tabs = ['Courses', 'Professors', 'Students'];
  // const { tab, setTab } = props;
  const dispatch = useDispatch();
  const searchReducer = useSelector((reduxState) => reduxState.search);

  // const tabDivs = tabs.map((tabName, index) => {
  //   if (tabName === tab) {
  //     return (
  //       <div key={tabName} className={`${styles.tab} ${styles.active}`}>
  //         <B1 color="var(--lightest-grey)">{tabName}</B1>
  //       </div>
  //     );
  //   }
  //   return (
  //     <div
  //       key={tabName}
  //       onClick={() => setTab(tabName)}
  //       className={styles.tab}
  //     >
  //       <B1 color="var(--darkest-grey)">{tabName}</B1>
  //     </div>
  //   );
  // });

  return (
    // <div className={styles.tabGroup}>
    //   {tabDivs}
    // </div>
    <Box sx={{ borderBottom: 2, borderColor: 'divider' }}>
      <Tabs
        value={searchReducer.tab}
        onChange={(e, value) => {
          dispatch(setTab(value));
          dispatch(setSearchQuery(searchReducer.searchQuery));
          // dispatch(clearSearchResults());
        }}
        style={{ marginTop: '20px' }}
      >
        <Tab label="Courses" value="Courses" />
        <Tab label="Professors" value="Professors" />
        <Tab label="Students" value="Students" />

      </Tabs>

    </Box>

  );
}

export default TabBar;

// import React from 'react';
// import { B1 } from '../ui/typography';
// import styles from '../../styles/components/TabBar.module.css';

// function TabBar(props) {
//   const tabs = ['Courses', 'Professors', 'Users'];
//   const colors = ['var(--pastel-green)', 'var(--pastel-orange)', 'var(--pastel-blue)'];
//   const { tab, setTab } = props;
//   const tabDivs = tabs.map((tabName, index) => {
//     if (tabName === tab) {
//       return (
//         <div key={tabName} className={`${styles.tab} ${styles.active}`}>
//           <B1 color="var(--lightest-grey)">{tabName}</B1>
//         </div>
//       );
//     }
//     return (
//       <div
//         key={tabName}
//         onClick={() => setTab(tabName)}
//         className={styles.tab}
//         style={{ background: colors[index] }}
//       >
//         <B1 color="var(--darkest-grey)">{tabName}</B1>
//       </div>
//     );
//   });

//   return (
//     <div className={styles.tabGroup}>
//       {tabDivs}
//     </div>
//   );
// }

// export default TabBar;
