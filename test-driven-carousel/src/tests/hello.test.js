import React from 'react';

describe ('JSX', () => {
  it ('calls React.createElement', () => {
    //spy intercepts createElement call to allow us to check how it was used
    const createElementSpy = jest.spyOn(React, 'createElement');
    <h1>Hello, JSX!</h1>;
    expect(createElementSpy).toHaveBeenCalledWith('h1', null, 'Hello, JSX!');
  });
});