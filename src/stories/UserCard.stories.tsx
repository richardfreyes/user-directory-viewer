import type { Meta, StoryObj } from '@storybook/react-vite';
import { Card } from 'primereact/card';
import type { User } from '../types/User';

const UserCard = ({ user }: { user: User }) => {
  return (
    <Card>
      <p><strong>Email:</strong> {user?.email}</p>
      <p><strong>User Name:</strong> {user?.username}</p>
      <p><strong>Phone:</strong> {user?.phone}</p>
      <p><strong>Website:</strong> <a href={`http://${user.website}`} target='_blank' rel='noopener noreferrer'>{user?.website}</a></p>
      <p><strong>Company:</strong> {user?.company.name}</p>
      <p><strong>Address:</strong> {user?.address.street}, {user?.address.suite}, {user?.address.city}, {user?.address.zipcode}</p>
    </Card>
  );
};

const meta: Meta<typeof UserCard> = {
  title: 'Components/UserCard',
  component: UserCard,
  tags: ['autodocs'],
  argTypes: {
    user: {
      control: 'object',
      description: 'User data to display',
    },
  },
};

export default meta;

type Story = StoryObj<typeof UserCard>;

export const Default: Story = {
  args: {
    user: {
      id: 1,
      name: 'Leanne Graham',
      username: 'Bret',
      email: 'Sincere@april.biz',
      phone: '1-770-736-8031 x56442',
      website: 'hildegard.org',
      company: {
        name: 'Romaguera-Crona',
        catchPhrase: 'Multi-layered client-server neural-net',
        bs: 'harness real-time e-markets'
      },
      address: {
        street: 'Kulas Light',
        suite: 'Apt. 556',
        city: 'Gwenborough',
        zipcode: '92998-3874'
      }
    },
  },
};