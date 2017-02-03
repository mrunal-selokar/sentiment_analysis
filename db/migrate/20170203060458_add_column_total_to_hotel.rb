class AddColumnTotalToHotel < ActiveRecord::Migration[5.0]
  def change
    add_column :hotels, :total_score, :decimal
  end
end
