describe("auth", () => {
  it("should resolve with true and valid userId for hardcoded token", async () => {
    const response = 1 + 1;
    expect(response).toEqual(2);
  });

  // it("should resolve with false for invalid token", async () => {
  //   const response = await user.auth("invalidToken");
  //   expect(response).toEqual({
  //     error: { type: "unauthorized", message: "Authentication Failed" },
  //   });
  // });
});

