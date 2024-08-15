// components/recent-shipments.js
export const RecentShipments = () => {
  const shipments = [
    {
      id: 'SH12345',
      destination: 'Mumbai, Maharashtra',
      driver: 'Rajesh Kumar',
      status: 'In Transit',
    },
    {
      id: 'SH12346',
      destination: 'Delhi, Delhi',
      driver: 'Pooja Sharma',
      status: 'Delivered',
    },
    {
      id: 'SH12347',
      destination: 'Bangalore, Karnataka',
      driver: 'Amit Singh',
      status: 'Pending',
    },
    {
      id: 'SH12348',
      destination: 'Chennai, Tamil Nadu',
      driver: 'Lakshmi Nair',
      status: 'In Transit',
    },
    {
      id: 'SH12349',
      destination: 'Kolkata, West Bengal',
      driver: 'Ravi Verma',
      status: 'Delivered',
    },
  ];

  return (
    <div className='space-y-4'>
      {shipments.map((shipment) => (
        <div key={shipment.id} className='flex items-center justify-between p-2 border-b'>
          <div className='font-medium'>{shipment.id}</div>
          <div>{shipment.destination}</div>
          <div>{shipment.driver}</div>
          <div className={`font-semibold ${shipment.status === 'Delivered' ? 'text-green-600' : 'text-yellow-600'}`}>
            {shipment.status}
          </div>
        </div>
      ))}
    </div>
  );
};
