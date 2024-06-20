import { HomePageComponent } from './home-page.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { render } from '@testing-library/angular';

describe('HomePageComponent', () => {
  it('should create', async () => {
    const component = await render(HomePageComponent, {
      imports: [HttpClientTestingModule],
    });
    expect(component.fixture.componentInstance).toBeTruthy();
  });

  it('should render the title and text correctly', async () => {
    const { getByText } = await render(HomePageComponent, {
      imports: [HttpClientTestingModule],
    });
    const titleElement = getByText('Banking at your fingertips');
    const textElement = getByText('Experience the convenience of banking at your fingertips with our user-friendly banking services, allowing you to manage your finances anytime, anywhere with ease');
    expect(titleElement).toBeTruthy();
    expect(textElement).toBeTruthy();
  });

  it('should render the buttons correctly when user is not logged in', async () => {
    const { getByText } = await render(HomePageComponent, {
      imports: [HttpClientTestingModule],
    });
    const loginButton = getByText('Have account? Go to Login');
    const registerButton = getByText('New user? Create an account');
    expect(loginButton).toBeTruthy();
    expect(registerButton).toBeTruthy();
  });

  it('should render the image correctly', async () => {
    const { getByAltText } = await render(HomePageComponent, {
      imports: [HttpClientTestingModule],
    });
    const imageElement = getByAltText('Opis obrazka');
    expect(imageElement).toBeTruthy();
  });
});
