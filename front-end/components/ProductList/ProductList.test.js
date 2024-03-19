import { render } from "@testing-library/react-native";
import ProductList from "./ProductList";
import { fetchExplorer } from "../../pages/Profile/Add/Explorer/ExplorerFunctions";

jest.mock("../../pages/Profile/Add/Explorer/ExplorerFunctions");
jest.mock("react-native-modal", () => "Modal");

describe("ProductList", () => {
  it("renders correctly", () => {
    const { getByTestId } = render(<ProductList category="someCategory" />);
    expect(getByTestId("flatList")).toBeTruthy();
  });

  it("fetches data and renders product cards", async () => {
    const mockData = [
      {
        name: "Product 1",
        price: "10.00",
        image: "https://example.com/product1.jpg",
      },
      {
        name: "Product 2",
        price: "20.00",
        image: "https://example.com/product2.jpg",
      },
    ];
    fetchExplorer.mockResolvedValue(mockData);

    const { findByText, findAllByTestId } = render(
      <ProductList category="someCategory" />
    );
    await findAllByTestId("product-card");

    // Wait for the initial data to be loaded
    await new Promise((resolve) => setTimeout(resolve, 100));

    expect(fetchExplorer).toHaveBeenCalledTimes(2);

    expect(findByText("Product 1")).toBeTruthy();
    expect(findByText("Product 2")).toBeTruthy();
  });
});
