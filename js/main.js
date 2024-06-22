import { 
    getAverageProductsOrders,
    getTotalProductsSoldPerProductLine,
    getAveragePriceEachProductsPerProductLine
} from "./modules/orderdetails.js";
import {
    getUsaClientsLimitCredit,
    getAverageLimitCreditPerClient,
    getAverageCreditLimitPerCountry
} from "./modules/customer.js";
import {
    getClientPayments,
    getAllPaymentsPerClient,
    getAllPayments,
    getTotalPaymentsPerClient,
    getTotalPaymentsPerCountry,
    getTotalPaymentsPerYear
} from "./modules/payments.js";
import {
    getOrdersSend,
    getOrdersFromFrance,
    getOrdersAndNamesPerClient,
    getTotalOrdersPerClient,
    getTotalProductsOrderedPerClient,
    getTotalSalesPerClient
} from "./modules/order.js";
import {
    getSanFranciscoEmployees,
    getNameAndEmailFromEmployeesWhoReport,
    getAllEmployees,
    getEmployeesPerJob,
    getAverageSalesPerEmployee,
    getTotalOrdersPerEmployee,
    getAverageProductsOrderPerClient,
    getTotalSalesPerCountry,
    getTotalProductSoldPerSeller,
    getTotalPaymentsPerSeller,
    getAverageCreditLimitOfClientsPerSeller,
    getAverageProductsOrdersPerClient
} from "./modules/employees.js";
import { 
    getAllOfficesPerCountry,
    getTotalSalesPerOffice 
} from "./modules/office.js";
import { 
    getAllProductsline,
    getAllProductsAndLineDescription,
    getTotalStockProducts,
    getAveragePriceForAllProducts,
    getAllProductsPrice,
    getAverageProductsMSRP,
    getAverageProductsOnStockPerProductLine,
    getAveragePriceProductsPerProductLine
} from "./modules/products.js";

console.log(await getAverageProductsOnStockPerProductLine());