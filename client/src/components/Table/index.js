import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';

import { nanoid } from 'nanoid';

import Title from './components/Title';
import { styles } from './styles';

const camelize = str => {
  return str.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, (match, index) => {
    if (+match === 0) return '';
    return index === 0 ? match.toLowerCase() : match.toUpperCase();
  });
};

const Display = ({ data }) => {
  switch (data.type) {
    case 'button':
      return (
        <Button variant='contained' size='small' onClick={data.value.onClick}>
          {data.value.text}
        </Button>
      );
    case 'checkbox':
      return (
        <Checkbox
          checked={data.value}
          onChange={e => {
            e.preventDefault();
          }}
        />
      );
    case 'image':
      return <img src={data.value} width='32px' height='32px' />;
    default:
      return data.format ? data.format(data.value) : data.value;
  }
};

const Row = ({ data, onClick }) => {
  const classes = styles();
  const rowKey = nanoid();
  return (
    <TableRow
      hover
      role='checkbox'
      tabIndex={-1}
      key={rowKey}
      onClick={onClick}
    >
      {data.map(d => {
        const cellKey = nanoid();
        return (
          <TableCell key={cellKey} align={d.alignment} className={classes.cell}>
            <Display data={d} />
          </TableCell>
        );
      })}
    </TableRow>
  );
};

const Header = ({ columns }) => {
  const data = columns.map(col => ({
    alignment: col.alignment,
    value: col.name.startsWith('_') ? '' : col.name,
  }));
  return (
    <TableHead>
      <Row data={data} />
    </TableHead>
  );
};

export default ({ title, columns, rows, ...props }) => {
  const classes = styles();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(props.rowsPerPage || 10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <>
      <Title>{title}</Title>
      <Paper className={classes.root}>
        <TableContainer className={classes.container}>
          <Table
            stickyHeader
            aria-label='sticky table'
            className={classes.table}
          >
            <Header columns={columns} />
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map(row => {
                  const data = columns.map(col => ({
                    alignment: col.alignment,
                    value: row[camelize(col.name)],
                    ...col,
                  }));
                  return <Row data={data} onClick={row.onClick} />;
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component='div'
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
    </>
  );
};
