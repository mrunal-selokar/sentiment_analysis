class AddIndexToTotalScore < ActiveRecord::Migration[5.0]
  def change
  	add_index :hotels, :total_score
  end
end
