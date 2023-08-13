import { act, fireEvent, renderHook } from "@testing-library/react";
import useMediaQuery from "./useMediaQuery";

const getMinWidthFromMediaQuery = (query: string) => {
  const minWidthMatch = query.match(/\(\min-width:\s*(\d+)px\)/);
  return minWidthMatch ? parseInt(minWidthMatch[1]) : -1;
};

describe("useMediaQueryTest", () => {
  test("First Render", () => {
    // Mock window.matchMedia
    let matchMediaMock = jest.fn((query: string) => ({
      matches:
        getMinWidthFromMediaQuery(query) <= global.innerWidth ? true : false,
      addListener: jest.fn(),
      removeListener: jest.fn(),
    }));
    window.matchMedia = matchMediaMock as any; // Override window.matchMedia

    const { result } = renderHook(() => useMediaQuery("(min-width: 1060px)"));
    expect(result.current).toBe(false);
  });

  test("test with with >=query==1060px", () => {

    // Mock window.matchMedia
    let matchMediaMock = jest.fn((query: string) => ({
      matches:
        getMinWidthFromMediaQuery(query) <= 2000 ? true : false,
      addListener: jest.fn(),
      removeListener: jest.fn(),
    }));
    window.matchMedia = matchMediaMock as any; // Override window.matchMedia

    const { result } = renderHook(() => useMediaQuery("(min-width: 1060px)"));
    act(() => {
      global.dispatchEvent(new Event("resize"));
    });
    expect(result.current).toBe(true);
  });

  test("test with with <=query==1060px", () => {

    // Mock window.matchMedia
    let matchMediaMock = jest.fn((query: string) => ({
      matches:
        getMinWidthFromMediaQuery(query) <= 100 ? true : false,
      addListener: jest.fn(),
      removeListener: jest.fn(),
    }));
    window.matchMedia = matchMediaMock as any; // Override window.matchMedia

    const { result } = renderHook(() => useMediaQuery("(min-width: 1060px)"));
    act(() => {
      global.dispatchEvent(new Event("resize"));
    });
    expect(result.current).toBe(false);
  });
});

export {};
