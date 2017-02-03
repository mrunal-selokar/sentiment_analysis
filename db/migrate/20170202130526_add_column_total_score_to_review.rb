class AddColumnTotalScoreToReview < ActiveRecord::Migration[5.0]
  def change
    add_column :reviews, :total_score, :decimal
  end
end
