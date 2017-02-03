class RemoveColumnScoreFromReview < ActiveRecord::Migration[5.0]
  def change
  	remove_column :reviews, :score, :decimal
  end
end
