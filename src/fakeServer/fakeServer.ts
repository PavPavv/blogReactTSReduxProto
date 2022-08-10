import { User } from '../store/register/actions';

export const SERVER_PREFIX = 'PavPavTestBlogApp0';

interface RegisterResponse {
  status: string;
  code: string;
  message: string;
};

export const fakeRegisterServer = (userData: User): Promise<RegisterResponse> => {
  const { name, email, login, password } = userData;

  //  some back-end validation here...

  //	check db if there are already such credentials
	const currentName = localStorage.getItem(`${SERVER_PREFIX}_name`);
	const currentEmail = localStorage.getItem(`${SERVER_PREFIX}_email`);
	const currentLogin = localStorage.getItem(`${SERVER_PREFIX}_login`);

  return new Promise(resolve => {
		if (name === currentName) {
			setTimeout(() => {
        resolve({
					status: '400',
					code: 'Bad name',
          message: 'There are already such username in db!',
        });
      }, 300);

		} else if (email === currentEmail) {
      setTimeout(() => {
        resolve({
					status: '400',
					code: 'Bad email',
          message: 'There are already such email in db!',
        });
      }, 300);

		} else if (login === currentLogin) {
      setTimeout(() => {
        resolve({
					status: '400',
					code: 'Bad login',
          message: 'There are already such login in db!',
        });
      }, 300);	

    } else {
			localStorage.setItem(`${SERVER_PREFIX}_login`, login);
			localStorage.setItem(`${SERVER_PREFIX}_password`, password);
			localStorage.setItem(`${SERVER_PREFIX}_name`, name);
			localStorage.setItem(`${SERVER_PREFIX}_email`, email);

      setTimeout(() => {
        resolve({
          status: '200',
					code: 'All good',
          message: 'Everything stored in db!',
        });
      }, 800)
    }
  });

};

interface FetchData {
  login: string,
  password: string;
};

interface AuthResponseSuccess {
  token: string;
  expires_in: string;
};

interface AuthResponseFail {
  message: string;
};

export const fakeTokenServer = (authData: FetchData): Promise<AuthResponseSuccess | AuthResponseFail> => {

  const generateRandomKey = (): string => {
    const arr = [
      'Turing', 
      'Shannon', 
      'Atanasoff', 
      'Hewlett', 
      'Neumann', 
      'Zuse', 
      'Shockley', 
      'Kilby', 
      'Cerf', 
      'Torvalds', 
      'BernersLee', 
      'Brin',
    ];
    let randomNum = Math.floor(10000000 + Math.random() * 90000000);
    let randomName = arr[Math.floor(Math.random() * arr.length)];
    return randomName + '.' + randomNum.toString();
  };
  
  const currentLogin = localStorage.getItem(`${SERVER_PREFIX}_login`);
  const currentPassword = localStorage.getItem(`${SERVER_PREFIX}_password`);

  return new Promise(resolve => {
    if (authData.login === currentLogin && authData.password === currentPassword) {
      setTimeout(() => {
        resolve({
          token: generateRandomKey(),
          expires_in: '36000000',
        });
      }, 800)
    } else {
      setTimeout(() => {
        resolve({
          message: 'FakeFetch error: bad credentials!',
        });
      }, 300)
    }
  })
};