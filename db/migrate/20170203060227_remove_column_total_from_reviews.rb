class RemoveColumnTotalFromReviews < ActiveRecord::Migration[5.0]
  def change
  	remove_column :reviews, :total_score, :decimal
  end
end
