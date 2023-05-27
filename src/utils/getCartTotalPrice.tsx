import { Data } from "../redux/slices/cartSlice"
export const calcTotalPrice = (item: Data[]) => {
    return item.reduce((sum, item) => sum + item.price * item.count, 0)
  }
  export const calcTotalCount = (item: Data[]) => {
      return item.reduce((sum, item) => sum + item.count, 0)
  }