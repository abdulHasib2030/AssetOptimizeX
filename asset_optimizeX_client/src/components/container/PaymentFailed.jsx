
const PaymentFailed = () => {
  return (
    <div className="w-full relative flex flex-col items-center justify-center">
  <div className="w-full p-6 bg-slate-100 rounded-md shadow-lg border-top min-h-screen flex items-center justify-center">
    <div className="border border-red-500 md:w-96 mx-auto px-6 py-8 rounded-xl text-center">
      <p className='text-red-500 font-bold text-3xl mt-4 mb-2'>Payment Unsuccessful.</p>
      <p className='text-slate-400 mb-4'>Something went wrong, Payment Failed.</p>
    </div>
  </div>
</div>

  )
}

export default PaymentFailed