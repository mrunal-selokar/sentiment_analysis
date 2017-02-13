class AddHotelIdToAmenities < ActiveRecord::Migration[5.0]
  def change
    add_column :amenities, :hotel_id, :integer
  end
end
