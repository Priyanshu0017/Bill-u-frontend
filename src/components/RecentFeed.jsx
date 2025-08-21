import React from 'react';
import { Home, Megaphone, Package, User, FileText } from 'lucide-react';

// Mock data for the feed
const feedItems = [
  { type: 'shop_created', text: 'Shop "FreshMart" was created by Harsh', time: '16:05PM' },
  { type: 'campaign_launched', text: 'Campaign "Diwali50" was launched by "Binox"', time: '16:05PM' },
  { type: 'product_added', text: 'Admin Amit added 15 new products at "Binox"', time: '16:05PM' },
  { type: 'admin_deactivated', text: 'Shop Admin Priya was deactivated', time: '16:05PM' },
  { type: 'order_placed', text: 'Customer Rohan placed an order of ₹520 at "Binox"', time: '16:05PM' },
  { type: 'order_placed', text: 'Customer Rohan placed an order of ₹520 at "Binox"', time: '16:05PM' },
  { type: 'order_placed', text: 'Customer Rohan placed an order of ₹520 at "Binox"', time: '16:05PM' },
  { type: 'order_placed', text: 'Customer Rohan placed an order of ₹520 at "Binox"', time: '16:05PM' },
  { type: 'order_placed', text: 'Customer Rohan placed an order of ₹520 at "Binox"', time: '16:05PM' },
  { type: 'order_placed', text: 'Customer Rohan placed an order of ₹520 at "Binox"', time: '16:05PM' },
  { type: 'order_placed', text: 'Customer Rohan placed an order of ₹520 at "Binox"', time: '16:05PM' },
  { type: 'order_placed', text: 'Customer Rohan placed an order of ₹520 at "Binox"', time: '16:05PM' },
  { type: 'order_placed', text: 'Customer Rohan placed an order of ₹520 at "Binox"', time: '16:05PM' },
  { type: 'order_placed', text: 'Customer Rohan placed an order of ₹520 at "Binox"', time: '16:05PM' },
  { type: 'order_placed', text: 'Customer Rohan placed an order of ₹520 at "Binox"', time: '16:05PM' },
  { type: 'order_placed', text: 'Customer Rohan placed an order of ₹520 at "Binox"', time: '16:05PM' },
  { type: 'order_placed', text: 'Customer Rohan placed an order of ₹520 at "Binox"', time: '16:05PM' },
];

const feedIcons = {
  shop_created: { icon: Home, color: 'bg-yellow-100 text-yellow-600' },
  campaign_launched: { icon: Megaphone, color: 'bg-orange-100 text-orange-600' },
  product_added: { icon: Package, color: 'bg-blue-100 text-blue-600' },
  admin_deactivated: { icon: User, color: 'bg-red-100 text-red-600' },
  order_placed: { icon: FileText, color: 'bg-indigo-100 text-indigo-600' },
};

const RecentFeed = () => {
  return (
  <div className="bg-white p-4 md:p-6 rounded-2xl border border-gray-100 col-span-1" style={{ boxShadow: '0 2px 10px 0 rgba(0,0,0,0.20)' }}>
      <h3 className="text-base md:text-lg tracking-wider mb-3 md:mb-4">Recent Feed</h3>
  <div className="space-y-3 md:space-y-5 py-3 md:py-5 max-h-80 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 rounded-md">
        {feedItems.map((item, index) => {
          const IconComponent = feedIcons[item.type].icon;
          // Basic parser to bold the text in quotes
          const formattedText = item.text.replace(/"([^"]+)"/g, '<strong class="font-semibold text-bill-dark">"$1"</strong>');

          return (
            <div key={index} className="flex space-x-4 py-2 items-center">
              {/* Simple blue dot before icon */}
              <span className="w-2 h-2 rounded-full bg-black inline-block mr-2"></span>
              <div className={`w-8 h-8 md:w-10 md:h-10 rounded-lg flex-shrink-0 flex items-center justify-center text-yellow-500 bg-yellow-100`}>
                <IconComponent className="w-4 h-4 md:w-5 md:h-5" />
              </div>
              <div className="flex-1 flex items-center">
                <p className="text-[11px] md:text-xs " dangerouslySetInnerHTML={{ __html: formattedText }} />
                <span className="text-[10px] md:text-xs text-gray-400 flex-shrink-0 ml-3 md:ml-4 min-w-[48px] md:min-w-[56px] text-right">{item.time}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RecentFeed;76