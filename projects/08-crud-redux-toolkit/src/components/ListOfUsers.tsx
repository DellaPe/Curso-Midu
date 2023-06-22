import {
  Card,
  Table,
  TableRow,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableBody
} from '@tremor/react'

const users: {
    id: number;
    name: string;
    email: string;
    github: string;
  }[] = [
    {
      id: 1,
      name: 'Pedro Dellatore',
      email: 'peter.della@example.com',
      github: 'yazmanito'
    },
    {
      id: 2,
      name: 'Lena Whitehouse',
      email: 'lena.whitehouse@example.com',
      github: 'yazmanito'
    },

    {
      id: 3,
      name: 'Phil Less',
      email: 'phil.less@example.com',
      github: 'yazmanito'
    },
    {
      id: 4,
      name: 'John Camper',
      email: 'john.camper@example.com',
      github: 'yazmanito'
    },
    {
      id: 5,
      name: 'Max Balmoore',
      email: 'max.balmoore@example.com',
      github: 'yazmanito'
    },
    {
      id: 6,
      name: 'Peter Moore',
      email: 'peter.moore@example.com',
      github: 'yazmanito'
    },
    {
      id: 7,
      name: 'Joe Sachs',
      email: 'joe.sachs@example.com',
      github: 'leo'
    },
    {
      id: 8,
      name: 'Haakon Dahlberg',
      email: 'haakon@gmail.com',
      github: 'midudev'
    }
  ]

export default function ListOfUsers () {
  return (
    <Card>
      <Table>
        <TableHead>
          <TableRow>
            <TableHeaderCell> ID </TableHeaderCell>
            <TableHeaderCell> Nombre </TableHeaderCell>
            <TableHeaderCell> Email </TableHeaderCell>
            <TableHeaderCell> Acciones </TableHeaderCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {users.map((item) => (
            <TableRow key={item.name}>
              <TableCell>{item.id}</TableCell>
              <TableCell className='flex justify-normal items-center gap-4'>
                <img style={{ width: '32px', height: '32px' }} src={`https://unavatar.io/github/${item.github}`} alt={item.name} />
                {item.name}
              </TableCell>
              <TableCell>{item.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  )
}
