import mongoose from "mongoose";
import "./setup.mongo";

const admin_info = new mongoose.Schema({
    fullname: String,
    login_name: String,
    login_password: String,
});

const privileges = new mongoose.Schema({
    SelectOrListMembers: Boolean,
    AddMembers: Boolean,
    EditMembers: Boolean,
    DeleteMembers: Boolean,
    SelectOrListUsers: Boolean,
    AddUsers: Boolean,
    EditUsers: Boolean,
    DeleteUsers: Boolean,
    SearchOrListGroups: Boolean,
    AddGroups: Boolean,
    EditGroups: Boolean,
    DeleteGroups: Boolean,
    SelectOrListDepartments: Boolean,
    AddDepartments: Boolean,
    EditDepartments: Boolean,
    DeleteDepartments: Boolean,
    SelectOrListFellowships: Boolean,
    AddFellowships: Boolean,
    EditFellowships: Boolean,
    DeleteFellowsships: Boolean,
    SearchOrListVisitors: Boolean,
    AddVisitors: Boolean,
    EditVisitors: Boolean,
    DeleteVisitors: Boolean,
    SearchOrListIncomes: Boolean,
    AddIncomes: Boolean,
    EditIncomes: Boolean,
    DeleteIncomes: Boolean,
    SearchOrListExpenses: Boolean,
    AddExpenses: Boolean,
    EditExpenses: Boolean,
    DeleteExpenses: Boolean,
    SearchOrListEvents: Boolean,
    AddEvents: Boolean,
    EditEvents: Boolean,
    DeleteEvents: Boolean,
    SearchorListAttendance: Boolean,
    AddAttendance: Boolean,
    EditAttendance: Boolean,
    DeleteAttendance: Boolean,
    ExecuteAdvancedUserOptions: Boolean,
    ChangeLoginCredentials: Boolean,
    ViewUserAudit: Boolean,
    ModifySystemSettings: Boolean,
    ManageDatabase: Boolean,
    SendSMSMessages: Boolean,
    DeleteSMSMessages: Boolean,
    ChatUsers: Boolean,
    ViewStatistics: Boolean,
    ViewFinancialReports: Boolean,
});

const admin_schema = new mongoose.Schema({
    admin_info,
    privileges,
});

const Administrators = mongoose.model("church.admins", admin_schema);

export default Administrators;
