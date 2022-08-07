import RestQuery from "../RestQuery.js";

describe("RestQuery", () => {
  const instance = new RestQuery();

  it("should instantiate correctly", () => {
    expect(instance.searchKey).toMatchInlineSnapshot(`"search"`);
    expect(instance.pageKey).toMatchInlineSnapshot(`"page"`);
    expect(instance.limitKey).toMatchInlineSnapshot(`"limit"`);
    expect(instance.params).toMatchInlineSnapshot(`""`);
    expect(instance.customParams).toMatchInlineSnapshot(`""`);
  });

  describe("url function", () => {
    it("should set correctly url", () => {
      expect(instance.url("https://google.com")).toMatchInlineSnapshot(`
        RestQuery {
          "customParams": "",
          "limitKey": "limit",
          "pageKey": "page",
          "params": Object {
            "url": "https://google.com",
          },
          "searchKey": "search",
        }
      `);
    });
  });

  describe("search function", () => {
    it("should set correctly search", () => {
      expect(instance.search("123")).toMatchInlineSnapshot(`
        RestQuery {
          "customParams": "",
          "limitKey": "limit",
          "pageKey": "page",
          "params": Object {
            "search": "123",
            "url": "https://google.com",
          },
          "searchKey": "search",
        }
      `);
    });
  });

  describe("page function", () => {
    it("should set correctly page", () => {
      expect(instance.page("123")).toMatchInlineSnapshot(`
        RestQuery {
          "customParams": "",
          "limitKey": "limit",
          "pageKey": "page",
          "params": Object {
            "page": "123",
            "search": "123",
            "url": "https://google.com",
          },
          "searchKey": "search",
        }
      `);
    });
  });

  describe("limit function", () => {
    it("should set correctly limit", () => {
      expect(instance.limit("10")).toMatchInlineSnapshot(`
        RestQuery {
          "customParams": "",
          "limitKey": "limit",
          "pageKey": "page",
          "params": Object {
            "limit": "10",
            "page": "123",
            "search": "123",
            "url": "https://google.com",
          },
          "searchKey": "search",
        }
      `);
    });
  });

  describe("build function", () => {
    it("should return correct url with params", () => {
      expect(instance.build()).toMatchInlineSnapshot(
        `"https://google.com?search=123&page=123&limit=10"`
      );
    });
  });
});
