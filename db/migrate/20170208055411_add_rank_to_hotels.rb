class AddRankToHotels < ActiveRecord::Migration[5.0]
  def change
    add_column :hotels, :rank, :integer
  end
end
