class AddScoreToHotel < ActiveRecord::Migration[5.0]
  def change
    add_column :hotels, :total_score, :float
  end
end
