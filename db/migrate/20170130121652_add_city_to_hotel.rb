class AddCityToHotel < ActiveRecord::Migration[5.0]
  def change
    add_column :hotels, :city, :string
  end
end
