class CreateHighScores < ActiveRecord::Migration
  def change
    create_table :high_scores do |t|
      t.string :score
      t.integer :user_id

      t.timestamps
    end
  end
end
