import { ScrollView, View } from "react-native";
import ExpenseTrackerCarousel from "./components/ExpenseTrackerCarousel/ExpenseTrackerCarousel";
import DailyExpenseTrackerChart from "./components/DailyExpenseTrackerChart/DailyExpenseTrackerChart";
import ImageUploader from "./../../../components/ImageUploader/ImageUploader";
import UploadReceipt from "./components/UploadReceipt/UploadReceipt";
import UpdateManually from "./components/ManualyUpdateBudget/UpdateManually";

const Home = () => {
  return (
    <>
      <ScrollView style={{ flex: 1 }}>
        <ExpenseTrackerCarousel />
        <DailyExpenseTrackerChart />
        <UpdateManually/>
        <UploadReceipt />
      </ScrollView>
    </>
  );
};

export default Home;
