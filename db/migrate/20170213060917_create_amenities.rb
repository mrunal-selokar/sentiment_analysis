class CreateAmenities < ActiveRecord::Migration[5.0]
  def change
    create_table :amenities do |t|
      t.boolean :wifi
      t.boolean :tv
      t.boolean :pool
      t.boolean :room_service
      t.boolean :ac
      t.boolean :food
      t.boolean :parking
      t.boolean :service
      t.references :hotel, foreign_key: true
      t.timestamps
    end
  end
end
