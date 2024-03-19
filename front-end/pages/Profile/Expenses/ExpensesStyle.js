import { Dimensions, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  //this style responsible for the your status content

  touchableContainer: {
    width: 300,
    height: 400,
    borderRadius: 10,
    overflow: "hidden",
    position: "relative",
  },

  balanceText: {
    fontWeight: "bold",
    fontSize: 26,
    alignContent: "center",
  },

  header: {
    fontWeight: "bold",
    alignSelf: "center",
    fontSize: 10,
  },

  box_one: {
    backgroundColor: "red",
    marginLeft: 12,
    borderRadius: 60,
    marginRight: 12,
  },

  box_one_text: {
    marginLeft: 30,
    padding: 10,
  },

  box_two: {
    backgroundColor: "red",
    marginLeft: 12,
    marginRight: 12,
    borderRadius: 60,
  },

  box_two_text: {
    marginLeft: 30,
    padding: 10,
  },

  calender: {
    height: Dimensions.get("window").height - 450,
    width: Dimensions.get("window").width - 50,
    borderRadius: 20,
    alignSelf: "center",
  },

  calenderContainer: {
    marginTop: 20,
    marginLeft: 12,
    marginRight: 12,
    alignSelf: "center",
    backgroundColor: "white", // Set background color of the calendar container
    borderRadius: 20, // Add border radius for rounded corners
    shadowColor: "#183D3D", // Add shadow properties
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowOpacity: 0.7,
    shadowRadius: 3.84,
    elevation: 5, // for Android
  },

  selectedDateContainer: {
    fontSize: 15,
    alignSelf: "center",
    marginTop: 20,
  },

  selectedDate: {
    fontSize: 25,
    alignSelf: "center",
    marginTop: 20,
    color: "blue",
    fontFamily: "Times New Roman",
  },

  show_Salary_Expenses: {
    marginLeft: 12,
  },

  status: {
    marginLeft: 25,
  },

  status_bar: {
    backgroundColor: "red",
    marginLeft: 12,
    marginRight: 30,
  },

  scrollView: {
    flexDirection: "row",
    padding: 10,
  },

  balanceAmount: {
    color: "black",
    fontWeight: "bold",
    fontSize: 30,
  },

  balanceBox: {
    borderRadius: 30,
    backgroundColor: "rgba(173, 216, 230, 0.5)", //#183D3D
    padding: 50,
    paddingRight: 77,
    paddingLeft: 12,
    borderwidth: 1,
    borderColor: "black",
  },

  text: {
    fontWeight: "bold",
    marginLeft: 12,
    fontSize: 20,
  },

  image: {
    height: 200,
    width: 350,
    marginLeft: 12,
    marginRight: 20,
    borderRadius: 40,
    marginTop: 12,
    overflow: "hidden",
    position: "relative", // Added position:relative
  },

  expenses: {
    marginLeft: 10,
    fontSize: 20,
    fontWeight: "bold",
  },

  // Style for the expenses data container
  expensesDataContainer: {
    marginTop: 20,
    marginLeft: 12,
    marginRight: 12,
    alignSelf: "center",
    backgroundColor: "rgb(197, 235, 170)", // Set background color of the expenses data container
    borderRadius: 20, // Add border radius for rounded corners
    shadowColor: "#183D3D", // Add shadow properties
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowOpacity: 0.7,
    shadowRadius: 3.84,
    elevation: 5, // for Android
    width: Dimensions.get("window").width - 50, // Make the width same as the calendar
    padding: 20, // Add padding to center the content
  },

  // Style for the expenses data title
  expensesDataTitle: {
    fontWeight: "bold",
    fontSize: 18,
    alignSelf: "center",
    marginBottom: 10, // Add margin bottom for spacing
  },

  // Style for the expense card
  expenseCard: {
    flexDirection: "row",
    justifyContent: "space-between", // Align text components horizontally
    marginBottom: 10, // Add margin bottom for spacing
  },

  // Style for the expense description
  expenseDescription: {
    fontSize: 16,
  },

  // Style for the expense amount
  expenseAmount: {
    fontSize: 16,
    fontWeight: "bold",
  },

  // Style for the total expenses
  totalExpenses: {
    fontWeight: "bold",
    fontSize: 16,
    marginTop: 10, // Add margin top for spacing
    alignSelf: "center", // Align to the right
  },
});

export default styles;
