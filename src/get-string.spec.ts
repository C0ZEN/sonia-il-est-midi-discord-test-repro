describe(`getString()`, (): void => {
  let username: string;

  describe(`when the given username is a simple string`, (): void => {
    beforeEach((): void => {
      username = `C0ZEN`;
    });

    it(`should return a message for this username`, (): void => {
      expect.assertions(1);

      const result = getString(username);

      expect(result).toStrictEqual(`yolo C0ZEN`);
    });
  });
});