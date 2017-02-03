class RemoveScoreFromHotel < ActiveRecord::Migration[5.0]
  def change
  	remove_column :hotels, :total_score, :decimal
  end
end
