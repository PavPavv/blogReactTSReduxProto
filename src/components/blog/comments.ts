import { getTimeDaysFromNow } from '../../utils/funcs/getTimeDaysFromNow';

export interface Comment {
  id: string,
  author: string;
  time: Date;
  liked: string;
  body: string;
  subComments: Comment[] | [];
};

export const comments: Comment[] = [
  {
    id: '1',
    author: 'Stranger123',
    time: getTimeDaysFromNow(2,12,0),
    liked: '7',
    body: 'Wow!',
    subComments: [
      {
        id: '1a',
        author: 'SOmePerson',
        time: getTimeDaysFromNow(2,1,0),
        liked: '8',
        body: 'Agree, this is amazing!',
        subComments: [],
      },
    ],
  },

  {
    id: '2',
    author: 'NewKid',
    time: getTimeDaysFromNow(2,20,0),
    liked: '9',
    body: 'This is made my day!',
    subComments: [
      {
        id: '2a',
        author: 'Stranger123',
        time: getTimeDaysFromNow(2,12,0),
        liked: '17',
        body: 'mine too :) love it! really glad that it is finally revealed',
        subComments: [],
      },
      {
        id: '2b',
        author: 'PrincesS',
        time: getTimeDaysFromNow(2,19,0),
        liked: '0',
        body: 'i guess it is a fake!',
        subComments: [],
      },
      {
        id: '2c',
        author: 'Jordan23',
        time: getTimeDaysFromNow(2,18,0),
        liked: '0',
        body: 'Cool! This is def wat i nid, man! gota say this is totally awesome, dude! keep it up, bro! You know what? I am gonna tell about it to all my friends and I got 12k in my fb, bro!',
        subComments: [],
      },
    ],
  },

  {
    id: '3',
    author: 'JackW',
    time: getTimeDaysFromNow(5,21,1),
    liked: '550',
    body: 'This is as hot as my new record, man!',
    subComments: [],
  },
];