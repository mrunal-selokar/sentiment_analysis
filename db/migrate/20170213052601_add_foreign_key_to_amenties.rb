class AddForeignKeyToAmenties < ActiveRecord::Migration[5.0]
  def change
  	add_foreign_key :amenities, :hotels
  end
end
